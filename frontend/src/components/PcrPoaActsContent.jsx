const PcrPoaActsContent = () => {
    return (
        <div className="prose prose-sm max-w-none dark:prose-invert">
            {/* PCR Act Section */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    1. Protection of Civil Rights (PCR) Act, 1955 — Key Points
                </h2>
                <p className="text-base leading-relaxed italic mb-4">
                    "An Act to eliminate untouchability and protect basic civil rights."
                </p>

                <ol className="list-decimal ml-5 space-y-3 mt-3">
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Abolition of Untouchability:</strong> The Act legally abolishes
                        untouchability in all forms and makes its practice a punishable offense.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Guarantees Equal Access:</strong> Ensures that no person can be
                        denied access to shops, restaurants, public places, water sources, or transportation due to caste.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Prohibits Social Disabilities:</strong> Forbids restrictions on
                        wearing clothes, using residential areas, or participating in religious or social activities.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Penalizes Caste-based Discrimination:</strong> Offenses like
                        refusing service, preventing temple entry, or denying basic civil rights are punishable.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Covers Public Places & Institutions:</strong> Ensures equal access
                        to educational institutions, hospitals, hotels, parks, and other facilities.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Protection of Human Dignity:</strong> Aims to preserve dignity by
                        eliminating humiliating customs, social boycotts, or degrading practices.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Focus on Prevention & Punishment:</strong> Provides strict penalties,
                        imprisonment, and fines for practicing untouchability.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Responsibility of State Authorities:</strong> State governments must
                        enforce the Act and monitor violations.
                    </li>
                </ol>
            </section>

            {/* PoA Act Section */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8">
                    2. SC/ST (Prevention of Atrocities) — PoA Act, 1989 — Key Points
                </h2>
                <p className="text-base leading-relaxed italic mb-4">
                    "A stronger law to prevent atrocities, protect SC/ST communities, and ensure justice."
                </p>

                <ol className="list-decimal ml-5 space-y-3 mt-3">
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Prevents Atrocities Against SC/ST:</strong> Protects Scheduled Castes
                        and Scheduled Tribes from violence, humiliation, harassment, and discrimination.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Lists Specific Atrocities:</strong> Includes offenses like wrongful
                        eviction, assault, intimidation, forced labor, and social or economic boycotts.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Protects Dignity and Human Rights:</strong> Crimes committed with
                        caste-based intent are treated as serious violations.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Provides Immediate Relief & Compensation:</strong> Victims must
                        receive relief, rehabilitation, and financial assistance.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Special Courts for Faster Trials:</strong> Establishes Special Courts
                        and Special Public Prosecutors.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Strict Punishments:</strong> Penalties are more severe, including
                        mandatory imprisonment for certain offenses.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Safeguards Against Misuse:</strong> Investigations must follow strict
                        protocols while protecting victim safety.
                    </li>
                    <li className="text-gray-800 dark:text-gray-200">
                        <strong className="font-semibold">Protects Witnesses & Victims:</strong> Ensures protection during
                        investigation and trial phases.
                    </li>
                </ol>
            </section>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> Both Acts work together to protect the rights and dignity of marginalized communities.
                    The PCR Act focuses on abolishing untouchability, while the PoA Act provides stronger protection against
                    atrocities and ensures swift justice.
                </p>
            </div>
        </div>
    );
};

export default PcrPoaActsContent;
