import React, { useState, useRef } from 'react'
import { Button } from './ui/button'

const CONDITION_COLOURS = {
  sealed: 'bg-green-100 text-green-800',
  opened: 'bg-blue-100 text-blue-800',
  damaged: 'bg-red-100 text-red-800',
  unknown: 'bg-slate-100 text-slate-600',
}

const FLAG_COLOURS = {
  expired: 'bg-red-100 text-red-700 border-red-200',
  expiring_soon: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  damaged: 'bg-orange-100 text-orange-700 border-orange-200',
  uncertain_item: 'bg-slate-100 text-slate-600 border-slate-200',
  unrecognised: 'bg-purple-100 text-purple-700 border-purple-200',
}

const LIGHTING_COLOURS = {
  good: 'text-green-700',
  adequate: 'text-yellow-700',
  poor: 'text-red-700',
}

const VISIBILITY_COLOURS = {
  full: 'text-green-700',
  partial: 'text-yellow-700',
  obstructed: 'text-red-700',
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      // reader.result is "data:<mime>;base64,<data>" — strip the prefix
      const base64 = reader.result.split(',')[1]
      resolve({ base64, mimeType: file.type || 'image/jpeg' })
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

function FlagBadge({ flag }) {
  const cls = FLAG_COLOURS[flag] || 'bg-slate-100 text-slate-600 border-slate-200'
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs border ${cls}`}>
      {flag.replace(/_/g, ' ')}
    </span>
  )
}

export default function VisionScanner({ kitId, onScanSaved }) {
  const [preview, setPreview] = useState(null)
  const [file, setFile] = useState(null)
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)
  const inputRef = useRef(null)

  function handleFileChange(e) {
    const chosen = e.target.files?.[0]
    if (!chosen) return
    setFile(chosen)
    setResult(null)
    setError('')
    setSaved(false)
    const url = URL.createObjectURL(chosen)
    setPreview(url)
  }

  async function handleScan() {
    if (!file) return
    setScanning(true)
    setError('')
    setResult(null)
    setSaved(false)

    try {
      const { base64, mimeType } = await fileToBase64(file)
      const res = await fetch('/api/vision-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kit_id: kitId || 'Demo', image_base64: base64, media_type: mimeType }),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) {
        setError(json.error || 'Scan failed. Please try again.')
      } else {
        setResult(json.result)
      }
    } catch (err) {
      setError(err?.message || 'Network error. Please try again.')
    } finally {
      setScanning(false)
    }
  }

  function handleSave() {
    if (!result) return
    if (onScanSaved) onScanSaved(result)
    setSaved(true)
  }

  function handleReset() {
    setFile(null)
    setPreview(null)
    setResult(null)
    setError('')
    setSaved(false)
    if (inputRef.current) inputRef.current.value = ''
  }

  const summary = result?.compliance_summary
  const actionRequired = summary?.action_required

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">AI Kit Scanner</h3>
        <p className="text-sm text-slate-500 mt-1">
          Take or upload a photo of a safety kit for an instant compliance report powered by Llama 4 Scout.
        </p>
      </div>

      {/* Image input */}
      <div className="space-y-3">
        <label className="block">
          <span className="sr-only">Choose kit photo</span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            onChange={handleFileChange}
          />
        </label>

        {/* Only render preview for blob: URLs created by this component (from createObjectURL) */}
        {preview && preview.startsWith('blob:') && (
          <img
            src={preview}
            alt="Kit preview"
            className="w-full rounded-lg object-contain max-h-64 border border-slate-100"
          />
        )}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 flex-wrap">
        <Button onClick={handleScan} disabled={!file || scanning} className="flex-1">
          {scanning ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Scanning…
            </span>
          ) : 'Scan Kit'}
        </Button>
        {(file || result) && (
          <Button variant="outline" onClick={handleReset}>Reset</Button>
        )}
      </div>

      {/* Error */}
      {error && (
        <div role="alert" className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-5">

          {/* Compliance summary counts */}
          {summary && (
            <div className={`p-3 rounded-lg border ${actionRequired ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
              <p className={`text-sm font-semibold mb-2 ${actionRequired ? 'text-red-700' : 'text-green-700'}`}>
                {actionRequired ? '⚠ Action Required' : '✓ No Action Required'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
                <div className="bg-white rounded p-2 border">
                  <div className="text-lg font-bold text-red-600">{summary.expired_items ?? 0}</div>
                  <div className="text-slate-500">Expired</div>
                </div>
                <div className="bg-white rounded p-2 border">
                  <div className="text-lg font-bold text-yellow-600">{summary.expiring_soon ?? 0}</div>
                  <div className="text-slate-500">Expiring Soon</div>
                </div>
                <div className="bg-white rounded p-2 border">
                  <div className="text-lg font-bold text-orange-600">{summary.damaged_items ?? 0}</div>
                  <div className="text-slate-500">Damaged</div>
                </div>
                <div className="bg-white rounded p-2 border">
                  <div className="text-lg font-bold text-slate-600">{summary.uncertain_items ?? 0}</div>
                  <div className="text-slate-500">Uncertain</div>
                </div>
              </div>
            </div>
          )}

          {/* Detected items */}
          {result.detected_items?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Detected Items</p>
              <ul className="space-y-2">
                {result.detected_items.map((item, i) => (
                  <li key={i} className="bg-slate-50 rounded-lg px-3 py-2.5 text-sm">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <span className="font-medium text-slate-800">
                        {item.item_name}
                        {item.uncertain && <span className="ml-1 text-xs text-slate-400">(uncertain)</span>}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${CONDITION_COLOURS[item.condition] || CONDITION_COLOURS.unknown}`}>
                        {item.condition}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-slate-500">
                      <span>
                        Qty: <strong>{item.quantity ?? '?'}</strong>
                        {item.estimated && <span className="ml-1 text-slate-400">(est.)</span>}
                      </span>
                      {item.expiry_date ? (
                        <span>
                          Exp: <strong>{item.expiry_date}</strong>
                          {item.expiry_uncertain && <span className="ml-1 text-slate-400">(uncertain)</span>}
                        </span>
                      ) : (
                        <span className="text-slate-400">No expiry</span>
                      )}
                      {item.lot_number && <span>Lot: <strong>{item.lot_number}</strong></span>}
                    </div>
                    {item.compliance_flags?.length > 0 && (
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {item.compliance_flags.map((flag) => <FlagBadge key={flag} flag={flag} />)}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Unrecognised objects */}
          {result.unrecognised_objects?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Unrecognised Objects</p>
              <ul className="space-y-1 text-sm text-slate-500 list-disc list-inside">
                {result.unrecognised_objects.map((obj, i) => <li key={i}>{obj}</li>)}
              </ul>
            </div>
          )}

          {/* Scan quality */}
          {result.scan_quality && (
            <div className="bg-slate-50 rounded-lg px-3 py-2.5 text-sm">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Scan Quality</p>
              <div className="flex gap-4 text-xs">
                <span>
                  Lighting:{' '}
                  <strong className={LIGHTING_COLOURS[result.scan_quality.lighting] || ''}>
                    {result.scan_quality.lighting}
                  </strong>
                </span>
                <span>
                  Visibility:{' '}
                  <strong className={VISIBILITY_COLOURS[result.scan_quality.visibility] || ''}>
                    {result.scan_quality.visibility}
                  </strong>
                </span>
              </div>
              {result.scan_quality.notes && (
                <p className="mt-1 text-slate-500 italic text-xs">{result.scan_quality.notes}</p>
              )}
            </div>
          )}

          {/* Save / saved */}
          {saved ? (
            <div role="status" className="p-3 rounded-lg bg-green-50 border border-green-200 text-sm text-green-800">
              ✓ Scan saved successfully.
            </div>
          ) : (
            <Button onClick={handleSave} className="w-full bg-emerald-600 hover:bg-emerald-700">
              Confirm & Save Scan
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
