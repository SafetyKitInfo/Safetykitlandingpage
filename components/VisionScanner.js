import React, { useState, useRef } from 'react'
import { Button } from './ui/button'

const STATUS_COLOURS = {
  ok: 'bg-green-100 text-green-800',
  expired: 'bg-red-100 text-red-800',
  expiring_soon: 'bg-yellow-100 text-yellow-800',
  low_stock: 'bg-orange-100 text-orange-800',
  missing: 'bg-red-100 text-red-800',
  unknown: 'bg-slate-100 text-slate-600',
}

const COMPLIANCE_COLOURS = {
  compliant: 'text-green-700 bg-green-50 border-green-200',
  'non-compliant': 'text-red-700 bg-red-50 border-red-200',
  needs_review: 'text-yellow-700 bg-yellow-50 border-yellow-200',
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
    if (onScanSaved) {
      onScanSaved(result)
    }
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

  const complianceCls = result ? (COMPLIANCE_COLOURS[result.compliance_summary] || COMPLIANCE_COLOURS.needs_review) : ''

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-slate-100 p-6 space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">AI Kit Scanner</h3>
        <p className="text-sm text-slate-500 mt-1">Take or upload a photo of a safety kit to get an instant compliance report.</p>
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

        {preview && (
          <img
            src={preview}
            alt="Kit preview"
            className="w-full rounded-lg object-contain max-h-64 border border-slate-100"
          />
        )}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 flex-wrap">
        <Button
          onClick={handleScan}
          disabled={!file || scanning}
          className="flex-1"
        >
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
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
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
        <div className="space-y-4">
          {/* Compliance summary banner */}
          <div className={`flex items-center gap-3 p-3 rounded-lg border ${complianceCls}`}>
            <span className="font-semibold capitalize">{result.compliance_summary?.replace(/_/g, ' ')}</span>
            {result.overall_condition && (
              <span className="text-xs opacity-70">· Condition: {result.overall_condition}</span>
            )}
          </div>

          {/* Compliance flags */}
          {result.compliance_flags?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Flags</p>
              <div className="flex flex-wrap gap-2">
                {result.compliance_flags.map((flag) => (
                  <span key={flag} className="px-2 py-0.5 bg-orange-50 text-orange-700 rounded-full text-xs border border-orange-100">
                    {flag.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Detected items */}
          {result.detected_items?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Detected Items</p>
              <ul className="space-y-1.5">
                {result.detected_items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between text-sm bg-slate-50 rounded-lg px-3 py-2">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <div className="flex items-center gap-2 text-xs">
                      {item.quantity != null && <span className="text-slate-500">×{item.quantity}</span>}
                      {item.expiry_date && <span className="text-slate-500">{item.expiry_date}</span>}
                      <span className={`px-2 py-0.5 rounded-full ${STATUS_COLOURS[item.status] || STATUS_COLOURS.unknown}`}>
                        {item.status?.replace(/_/g, ' ')}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          {result.recommendations?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Recommendations</p>
              <ul className="space-y-1 text-sm text-slate-600 list-disc list-inside">
                {result.recommendations.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Notes */}
          {result.notes && (
            <p className="text-sm text-slate-500 italic">{result.notes}</p>
          )}

          {/* Save button */}
          {saved ? (
            <div role="status" className="p-3 rounded-lg bg-green-50 border border-green-200 text-sm text-green-800">
              ✓ Scan saved successfully.
            </div>
          ) : (
            <Button onClick={handleSave} className="w-full bg-emerald-600 hover:bg-emerald-700">
              Confirm &amp; Save Scan
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
