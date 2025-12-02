const TermsOfServiceContent = () => {
    return (
        <div className="prose prose-sm max-w-none dark:prose-invert">
            <div className="mb-6">
                <p className="text-base leading-relaxed">
                    Welcome to Nyaya Setu ("Platform", "Service", "we", "us"), a digital system developed by Dream's Hack
                    to support beneficiaries, victims, field officers, and authorities in processes related to Direct Benefit
                    Transfer (DBT) under the Protection of Civil Rights (PCR) Act, 1955 and the Scheduled Castes & Scheduled
                    Tribes (Prevention of Atrocities) Act, 1989.
                </p>
                <p className="mt-3 text-base leading-relaxed">
                    By accessing or using Nyaya Setu, you agree to these Terms of Service ("Terms"). If you do not agree,
                    you must stop using the Platform.
                </p>
            </div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" />

            {/* Section 1 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">1. Purpose of the Platform</h3>
                <p className="mb-2">Nyaya Setu provides:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Online access to eligibility checks, case verification, and DBT-related workflows;</li>
                    <li>Status tracking for sanctions, payments, and document submissions;</li>
                    <li>Integration with government systems (Aadhaar, DigiLocker, CCTNS, eCourts, banking APIs);</li>
                    <li>Tools for grievance submission and feedback;</li>
                    <li>Dashboards for authorized officials for processing and monitoring.</li>
                </ul>
                <p className="mt-2">The Platform is not a legal authority. It functions as a digital interface for supported processes.</p>
            </section>

            {/* Section 2 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">2. Eligibility to Use the Platform</h3>
                <p className="mb-2">You must:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Be a legitimate beneficiary, victim, representative, or authorized official;</li>
                    <li>Provide accurate and truthful information;</li>
                    <li>Use the Platform only for lawful and permitted purposes.</li>
                </ul>
                <p className="mt-2">Misuse, impersonation, or falsification of records will result in access restrictions and may trigger legal action.</p>
            </section>

            {/* Section 3 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">3. User Responsibilities</h3>
                <p className="mb-2">By using Nyaya Setu, you agree to:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Maintain the confidentiality of your login credentials;</li>
                    <li>Ensure that the information you submit is accurate and factual;</li>
                    <li>Not attempt to breach or bypass platform security;</li>
                    <li>Not upload harmful, malicious, or fraudulent content;</li>
                    <li>Use the Platform only for the intended public service purpose.</li>
                </ul>
                <p className="mt-2">You are responsible for all activities occurring under your account.</p>
            </section>

            {/* Section 4 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">4. Accuracy of Information</h3>
                <p className="mb-2">
                    While Nyaya Setu integrates official data sources, certain information may depend on third-party systems.
                </p>
                <p className="mb-2">
                    We do not guarantee that all data retrieved from external sources (e.g., DigiLocker, CCTNS, eCourts)
                    will be error-free or available at all times.
                </p>
                <p>Users are responsible for verifying data where needed.</p>
            </section>

            {/* Section 5 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">5. Aadhaar Authentication & Electronic Verification</h3>
                <p className="mb-2">Nyaya Setu may provide Aadhaar authentication features strictly for identity verification.</p>
                <p className="mb-2">By initiating Aadhaar-based processes, you:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Provide consent for authentication;</li>
                    <li>Agree that Nyaya Setu will use tokenized identifiers only;</li>
                    <li>Understand that Aadhaar number itself is not stored.</li>
                </ul>
                <p className="mt-2">Use of Aadhaar is governed by UIDAI standards and applicable laws.</p>
            </section>

            {/* Section 6 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">6. Document Handling & Storage</h3>
                <p className="mb-2">
                    Documents uploaded or fetched (e.g., from DigiLocker) are used only for verification, eligibility, and DBT processing.
                </p>
                <p className="mb-2">
                    Dream's Hack does not verify the authenticity of documents independently beyond automated or official integrations.
                </p>
                <p>False or forged documents may lead to rejection of applications and legal action.</p>
            </section>

            {/* Section 7 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">7. DBT Payments & Banking Integration</h3>
                <p className="mb-2">Nyaya Setu facilitates DBT workflows but does not directly control:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Bank operations</li>
                    <li>Payment settlement timelines</li>
                    <li>Third-party service uptime</li>
                    <li>Transaction failures caused by user or bank error</li>
                </ul>
                <p className="mt-2">Users must ensure that their bank details are correct.</p>
                <p>The Platform is not responsible for losses due to incorrect data submission.</p>
            </section>

            {/* Section 8 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">8. Prohibited Activities</h3>
                <p className="mb-2">Users must not:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Access unauthorized sections of the Platform</li>
                    <li>Reverse-engineer, tamper with, or disrupt services</li>
                    <li>Use bots, scripts, or automated tools</li>
                    <li>Misuse personal or sensitive data of others</li>
                    <li>Attempt fraud, identity theft, or duplicate claims</li>
                    <li>Harass, threaten, or intimidate beneficiaries or officials</li>
                </ul>
                <p className="mt-2">Any violation may lead to suspension of access and reporting to legal authorities.</p>
            </section>

            {/* Section 9 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">9. Platform Availability</h3>
                <p className="mb-2">We strive to ensure 24×7 availability, but:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Scheduled maintenance</li>
                    <li>Technical issues</li>
                    <li>Third-party outages</li>
                    <li>Government API downtime</li>
                </ul>
                <p className="mt-2">…may temporarily affect service.</p>
                <p>Nyaya Setu is provided on an "as is" and "as available" basis.</p>
            </section>

            {/* Section 10 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">10. Limitation of Liability</h3>
                <p className="mb-2">Dream's Hack and Nyaya Setu are not liable for:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Data entered incorrectly by users</li>
                    <li>Delays caused by banks, telecom networks, or external systems</li>
                    <li>Losses due to third-party service providers</li>
                    <li>Legal disputes between individuals and authorities</li>
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Unauthorized access due to user negligence</li>
                </ul>
                <p className="mt-2">The Platform is a prototype/public service interface, and liability is limited to technical operations only.</p>
            </section>

            {/* Section 11 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">11. Data Privacy</h3>
                <p className="mb-2">
                    Your use of the Platform is also governed by our Privacy Policy available on the website.
                </p>
                <p>By using Nyaya Setu, you consent to the collection and processing of your data in accordance with that policy.</p>
            </section>

            {/* Section 12 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">12. Intellectual Property</h3>
                <p className="mb-2">
                    All content on Nyaya Setu including design, text, code, architecture, workflows, and graphics is the
                    intellectual property of Dream's Hack unless stated otherwise.
                </p>
                <p>Unauthorized duplication or modification is prohibited.</p>
            </section>

            {/* Section 13 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">13. Government Data Integrations</h3>
                <p className="mb-2">Nyaya Setu connects to various government systems.</p>
                <p className="mb-2">Use of such integrations is subject to:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Respective API terms</li>
                    <li>Legal frameworks governing those systems</li>
                    <li>User consent where required</li>
                </ul>
                <p className="mt-2">
                    Nyaya Setu does not alter or store external system data unless explicitly required for workflow functioning.
                </p>
            </section>

            {/* Section 14 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">14. Suspension or Termination of Access</h3>
                <p className="mb-2">Your access may be suspended or terminated if you:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Provide false or misleading information</li>
                    <li>Attempt fraud or misuse</li>
                    <li>Violate security protocols</li>
                    <li>Breach these Terms</li>
                    <li>Are found engaging in harassment or abuse</li>
                </ul>
                <p className="mt-2">Authorities may also be notified where necessary.</p>
            </section>

            {/* Section 15 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">15. Changes to the Terms</h3>
                <p className="mb-2">These Terms may be updated periodically to reflect:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Changes in laws</li>
                    <li>Improvements to Nyaya Setu</li>
                    <li>New features or APIs</li>
                    <li>Security updates</li>
                </ul>
                <p className="mt-2">The revised Terms will be published with an updated effective date.</p>
            </section>

            {/* Section 16 */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">16. Contact & Support</h3>
                <p>
                    For any concerns related to these Terms or the use of the Platform, users may reach out via the official
                    contact page on the Nyaya Setu website.
                </p>
            </section>
        </div>
    );
};

export default TermsOfServiceContent;
