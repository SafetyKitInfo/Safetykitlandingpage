import LegalPage from '../components/LegalPage'

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" description="SafetySight interim Privacy Policy.">
      <p className="eyebrow">Interim policy</p>
      <h1>SafetySight Privacy Policy</h1>
      <p className="updated">Effective 4 October 2026</p>

      <div className="notice">
        SafetySight is actively developing. This policy describes the service currently available. We may update it as the product and our information-handling practices change. Where a material change affects existing users, we will take reasonable steps to provide notice.
      </div>

      <h2>1. About this policy</h2>
      <p>SafetySight respects the privacy of people and organisations using our website and software. This policy explains, in general terms, how SafetySight collects, uses, holds and discloses personal information.</p>
      <p>Questions or requests can be sent to <a href="mailto:info.safetysight@gmail.com?subject=Privacy%20enquiry">info.safetysight@gmail.com</a>.</p>

      <h2>2. Information we collect</h2>
      <p>Depending on how you use SafetySight, we may collect:</p>
      <ul>
        <li>account information such as your name, email address, organisation, role and permissions;</li>
        <li>workplace, location, first-aid kit, item, inspection and follow-up information entered by authorised users;</li>
        <li>images and information submitted through SightScan or another scanning workflow;</li>
        <li>communications and support requests; and</li>
        <li>technical information needed to operate and secure the service, such as login activity, device or browser information, timestamps, errors and security events.</li>
      </ul>
      <p>Please do not submit medical records or unrelated sensitive personal information. Organisations using SafetySight are responsible for ensuring they are authorised to provide information about their personnel and workplaces.</p>

      <h2>3. How we collect information</h2>
      <p>We may collect information directly from you, from your organisation or its administrators, when information or images are entered into SafetySight, when you contact us, and automatically through use of the service.</p>

      <h2>4. How we use information</h2>
      <p>We may use information to:</p>
      <ul>
        <li>create, verify and manage accounts;</li>
        <li>provide kit-checking, record-keeping and SightScan functionality;</li>
        <li>maintain organisation access and permissions;</li>
        <li>provide support and service communications;</li>
        <li>diagnose errors, maintain security and prevent misuse;</li>
        <li>improve the reliability and usability of SafetySight; and</li>
        <li>comply with applicable law and protect legal rights.</li>
      </ul>

      <h2>5. Account verification and providers</h2>
      <p>SafetySight uses Microsoft Entra to protect the email-verification process. SafetySight also relies on service providers to operate functions such as hosting, storage, communications, monitoring and image processing. Information may be disclosed to those providers only as reasonably necessary to provide and secure the service, or where authorised or required by law.</p>
      <p>Some providers may process information outside Australia. We are documenting our current provider locations and will update this policy with more specific information as that review is completed.</p>

      <h2>6. SightScan and automated outputs</h2>
      <p>SightScan may use automated technology to assist with recognising first-aid items or information visible in an image. Automated results may be inaccurate or incomplete and should be reviewed by a person where they may affect a workplace-safety decision.</p>
      <p>We are documenting the retention and provider handling of SightScan images. Until that review is complete, users should avoid including people or unnecessary personal or sensitive information in submitted images.</p>

      <h2>7. Security</h2>
      <p>SafetySight uses authenticated accounts, organisation-based access controls and reasonable technical and organisational measures intended to protect information. No internet-connected service can guarantee absolute security.</p>
      <p>If you believe an account or information has been compromised, contact <a href="mailto:info.safetysight@gmail.com?subject=Security%20issue">info.safetysight@gmail.com</a>.</p>

      <h2>8. Retention and deletion</h2>
      <p>We retain information for as long as reasonably required to provide and secure SafetySight, maintain necessary records, resolve disputes and comply with applicable law. We are documenting specific deletion and backup periods and will add them to this policy when verified.</p>
      <p>You may request account or personal-information deletion by contacting us. A request may need to be handled through the organisation that controls the relevant workplace account, and some information may need to be retained where legally required.</p>

      <h2>9. Access, correction and complaints</h2>
      <p>You may ask to access or correct personal information held about you, or raise a privacy concern, by emailing <a href="mailto:info.safetysight@gmail.com?subject=Privacy%20request">info.safetysight@gmail.com</a>. We may verify your identity and, where appropriate, refer a request to the organisation controlling the relevant account.</p>

      <h2>10. Cookies</h2>
      <p>SafetySight may use cookies or similar technology where needed for authentication, security, preferences and application functionality. This policy will be updated before any additional non-essential analytics or advertising use is introduced.</p>

      <h2>11. Changes to this policy</h2>
      <p>The current version will be published with its effective date. Where a change materially affects existing users or how their information is handled, we will take reasonable steps to provide notice before or when the change takes effect.</p>
    </LegalPage>
  )
}
