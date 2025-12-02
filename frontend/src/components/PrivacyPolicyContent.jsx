const PrivacyPolicyContent = () => {
    return (
        <div className="prose prose-sm max-w-none dark:prose-invert">
            <div className="mb-6">
                <p className="text-base leading-relaxed">
                    Nyaya Setu ("Platform", "we", "us") is a digital system designed to support Direct Benefit Transfer (DBT)
                    processes related to victim relief under the Protection of Civil Rights (PCR) Act, 1955 and the Scheduled
                    Castes & Scheduled Tribes (Prevention of Atrocities) Act, 1989. Dream's Hack is committed to protecting
                    the privacy, security, and dignity of all beneficiaries, stakeholders, and users of the Platform.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                    This Privacy Policy explains how Nyaya Setu collects, uses, stores, shares, and safeguards personal data.
                </p>
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            {/* Section 1 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">1. Scope</h3>
                <p className="mb-2">This policy applies to all data collected through:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>The Nyaya Setu website and mobile/web applications</li>
                    <li>User registration and verification workflows</li>
                    <li>Field officer tools and offline data capture modules</li>
                    <li>Integrated APIs such as Aadhaar authentication, DigiLocker, eCourts, CCTNS, and payment gateways</li>
                    <li>Any official communication or grievance modules within the Platform</li>
                </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">2. Guiding Principles</h3>
                <p className="mb-2">Nyaya Setu follows privacy standards inspired by government platforms, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Data Minimisation</strong> – Only essential data is collected.</li>
                    <li><strong>Consent-Based Processing</strong> – Sensitive or third-party data retrieval requires explicit user consent.</li>
                    <li><strong>Security First</strong> – Encryption, access control, audit logging, and constant monitoring.</li>
                    <li><strong>Transparency</strong> – Users know what data is used and for what purpose.</li>
                    <li><strong>Accountability</strong> – All data access is logged and monitored.</li>
                </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">3. Information We Collect</h3>

                <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">a) Information Provided by Users</h4>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Name, age, gender (when required)</li>
                    <li>Mobile number, email address, and location details</li>
                    <li>Bank account details (for DBT payments)</li>
                    <li>Case details (FIR number, sanction ID, supporting orders)</li>
                    <li>Uploaded documents or scanned certificates</li>
                    <li>Grievances, feedback, and service requests</li>
                </ul>

                <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">b) Information from Integrated Systems</h4>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Aadhaar authentication responses (tokenised identifiers only)</li>
                    <li>DigiLocker documents retrieved with user consent</li>
                    <li>Case verification details from CCTNS or eCourts</li>
                </ul>

                <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">c) System & Technical Data</h4>
                <ul className="list-disc pl-6 space-y-1">
                    <li>IP address, device information, browser type</li>
                    <li>Login timestamps, access logs, session identifiers</li>
                    <li>Audit trails of actions by officials and users</li>
                </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">4. Purpose of Data Collection</h3>
                <p className="mb-2">Data collected through Nyaya Setu is used strictly for:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Verification of identity and eligibility</li>
                    <li>Processing victim relief and DBT disbursements</li>
                    <li>Case verification through integrated government systems</li>
                    <li>Tracking the status of applications and payments</li>
                    <li>Fraud detection and prevention</li>
                    <li>Grievance redressal</li>
                    <li>Legal compliance and audit requirements</li>
                    <li>Improving platform performance (in anonymized form only)</li>
                </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">5. Use of Aadhaar</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Aadhaar data is used exclusively for authentication purposes.</li>
                    <li>Raw Aadhaar numbers are NOT stored.</li>
                    <li>Tokenised or reference identifiers are used for internal matching.</li>
                    <li>Authentication follows UIDAI-compliant mechanisms (OTP/VID/biometric).</li>
                    <li>All Aadhaar-based operations are performed only after obtaining user consent.</li>
                </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">6. Use of DigiLocker, eCourts & CCTNS</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>DigiLocker documents are accessed only with explicit user permission.</li>
                    <li>Case details retrieved from CCTNS or eCourts are limited to required metadata.</li>
                    <li>Only minimal, relevant data is stored for verification and audit.</li>
                </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">7. Data Sharing & Disclosure</h3>
                <p className="mb-2">Nyaya Setu does not sell or share personal information with private entities.</p>
                <p className="mb-2">Data may be shared only with:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Authorized government departments</li>
                    <li>District and state authorities involved in victim relief</li>
                    <li>Banking partners for DBT disbursement</li>
                    <li>Law enforcement agencies or courts based on lawful requests</li>
                    <li>Auditors and regulators as per government norms</li>
                </ul>
                <p className="mt-2">All data sharing follows a minimum necessary principle.</p>
            </section>

            {/* Section 8 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">8. Data Retention</h3>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Personal data is retained only as long as required for legal, audit, and operational purposes.</li>
                    <li>Case records, transactions, verification logs, and grievance logs may be stored for multi-year compliance requirements.</li>
                    <li>After the retention period, data will be securely archived or deleted.</li>
                </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">9. Security Measures</h3>
                <p className="mb-2">To protect personal information, Nyaya Setu uses:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>AES-256 encryption for stored data</li>
                    <li>TLS 1.2+ for secure data transmission</li>
                    <li>Regular vulnerability assessments</li>
                    <li>Strict role-based access controls</li>
                    <li>Secure logging and audit trails</li>
                    <li>Multi-factor authentication for officials</li>
                    <li>Government-standard data center policies</li>
                </ul>
            </section>

            {/* Section 10 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">10. User Rights</h3>
                <p className="mb-2">Users of Nyaya Setu can:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Request access to their personal information</li>
                    <li>Correct inaccuracies in their profile or documents</li>
                    <li>Seek clarification on data usage</li>
                    <li>Request deletion of certain data (where legally permissible)</li>
                </ul>
                <p className="mt-2">Some data (e.g., financial transactions, audit logs) may not be deleted due to statutory requirements.</p>
            </section>

            {/* Section 11 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">11. Grievance Redressal</h3>
                <p className="mb-2">
                    Users may raise privacy or platform-related concerns through the Nyaya Setu grievance module or official support channels.
                </p>
                <p className="mb-2">
                    A dedicated privacy compliance authority will review and respond to concerns within reasonable timeframes.
                </p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400">(Your team may add the DPO details later.)</p>
            </section>

            {/* Section 12 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">12. Cookies & Tracking</h3>
                <p className="mb-2">
                    Nyaya Setu uses minimal cookies for session management, security, and performance analytics.
                </p>
                <p>No personal information is collected without user action.</p>
            </section>

            {/* Section 13 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">13. Third-Party Links</h3>
                <p className="mb-2">
                    The Platform may link to government services such as DigiLocker, eCourts, or NPCI gateways.
                </p>
                <p>Nyaya Setu is not responsible for the content or privacy practices of external websites.</p>
            </section>

            {/* Section 14 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">14. Policy Updates</h3>
                <p className="mb-2">
                    This Privacy Policy may be updated periodically to reflect changes in technology, laws, or platform features.
                </p>
                <p>The "Effective Date" will be updated whenever revisions are made.</p>
            </section>

            {/* Section 15 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">15. Contact Information</h3>
                <p>
                    For now, general queries related to privacy or the platform may be directed to the Dream's Hack Project Team
                    through the official website contact page.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicyContent;
