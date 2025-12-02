const FaqContent = () => {
    return (
        <div className="prose prose-sm max-w-none dark:prose-invert">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Nyaya Setu — Frequently Asked Questions (FAQs)
            </h2>

            <ol className="list-decimal ml-5 space-y-4">
                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">What is Nyaya Setu?</strong>
                    <p className="mt-2 leading-relaxed">
                        Nyaya Setu is a digital platform developed by Dream's Hack to support Direct Benefit Transfer (DBT),
                        case verification, grievance reporting, and monitoring related to the PCR Act, 1955 and the PoA Act, 1989.
                        It aims to make victim relief faster, transparent, and easier to access.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">Who can use Nyaya Setu?</strong>
                    <p className="mt-2 leading-relaxed">
                        Victims eligible for relief under PCR/PoA Acts, their authorized representatives, district and state officials,
                        field officers, and other stakeholders involved in case processing and monitoring can use the platform.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">Do I need to create an account to use Nyaya Setu?</strong>
                    <p className="mt-2 leading-relaxed">
                        Yes. Beneficiaries and officials must create a secure account to access personalized services, track applications,
                        upload documents, and receive DBT updates.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">What documents are required for registration?</strong>
                    <p className="mt-2 leading-relaxed">
                        Commonly required documents include identity proof, case details (FIR number), address proof, bank details,
                        and supporting documents. Some documents may also be fetched through DigiLocker during verification.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">Does Nyaya Setu support Aadhaar verification?</strong>
                    <p className="mt-2 leading-relaxed">
                        Yes. Nyaya Setu supports Aadhaar authentication for identity verification. Raw Aadhaar numbers are not stored;
                        only tokenized, secure identifiers are used.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">Can I access Nyaya Setu without Aadhaar?</strong>
                    <p className="mt-2 leading-relaxed">
                        Yes. Users without Aadhaar can verify their identity using alternative KYC documents, DigiLocker-based documents,
                        or assisted verification through field officers.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">How does the DBT process work on Nyaya Setu?</strong>
                    <p className="mt-2 leading-relaxed">
                        Once your case is verified and approved by district authorities, your relief amount is sent directly to your
                        registered bank account through secure DBT channels. You can track each step in real time.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">How can I track the status of my relief application?</strong>
                    <p className="mt-2 leading-relaxed">
                        Log in to your Nyaya Setu dashboard and go to the Status Tracking section. You will see updates for verification,
                        sanction approval, payment processing, and disbursement.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">What should I do if my payment fails or is delayed?</strong>
                    <p className="mt-2 leading-relaxed">
                        You can raise a grievance through the Grievance Module on Nyaya Setu. The platform notifies the concerned authority
                        and the issue will be resolved based on defined service-level timelines.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">What is the Grievance Module?</strong>
                    <p className="mt-2 leading-relaxed">
                        The Grievance Module allows users to report problems such as incorrect details, payment delays, document issues,
                        or account-related problems. Each grievance is assigned a tracking ID.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">Is my personal data safe on Nyaya Setu?</strong>
                    <p className="mt-2 leading-relaxed">
                        Yes. Nyaya Setu follows strict security measures including encryption, secure APIs, access control, and compliance
                        with government security standards to protect user data.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">Will my case information be visible to others?</strong>
                    <p className="mt-2 leading-relaxed">
                        No. All sensitive beneficiary data, including case documents, is accessible only to authorized users and officials.
                        Any public dashboards display anonymized and aggregated data only.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">Can field officers use Nyaya Setu offline?</strong>
                    <p className="mt-2 leading-relaxed">
                        Yes. Field officers can use the offline-enabled app to capture beneficiary data in remote areas with low or no
                        internet connectivity. Data syncs automatically when the network becomes available.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">How do I update my bank details or contact information?</strong>
                    <p className="mt-2 leading-relaxed">
                        Log in to your account and go to the Profile section. You can update your mobile number, email, or bank details.
                        Certain changes may require re-verification.
                    </p>
                </li>

                <li className="text-gray-800 dark:text-gray-200">
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">What if I am facing login or technical issues?</strong>
                    <p className="mt-2 leading-relaxed">
                        You can use the Help &amp; Support page to report login issues or technical errors. Our team will assist you using
                        the contact details provided on the website.
                    </p>
                </li>
            </ol>

            {/* Additional Help Section */}
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Still have questions?</strong> Contact us through the official Nyaya Setu support channels or use the
                    Grievance Module for assistance.
                </p>
            </div>
        </div>
    );
};

export default FaqContent;
