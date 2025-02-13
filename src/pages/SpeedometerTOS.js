import React from 'react';
import { styled } from '@mui/system';


const GradientBackground = styled('div')({
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #1E1E1E, #121212)',
    color: 'white',
    padding: '20px',
    overflowY: 'auto',
});


function SpeedometerTOS() {
    return (
        <GradientBackground>
            <div className="tos-container">
                <h1>Terms of Service</h1>

                <p>
                    The Terms of Service are currently only available in English. By using this app,
                    you confirm that you understand and agree to the English version.
                </p>
                
                <p className="last-updated">Last Updated: Febuary 13, 2025.</p>

                {/* Section 1: Acceptance */}
                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By using Speedometer (the "App"), you agree to these Terms of Service ("Terms").
                        If you disagree, do not use the App. Continued use after updates constitutes acceptance.
                    </p>
                </section>

                {/* Section 2: Prohibited Use */}
                <section>
                    <h2>2. Prohibited Use</h2>
                    <ul>
                        <li><strong>Do Not Use While Driving:</strong> The App is for informational purposes only. You agree <strong>not to use the App while operating a vehicle</strong>.</li>
                        <li><strong>Age Recommendation:</strong> Intended for users legally permitted to operate vehicles. Compliance with local driving laws is your responsibility.</li>
                        <li><strong>No Liability:</strong> We are not liable for damages, accidents, or losses arising from App use.</li>
                    </ul>
                </section>

                {/* Section 3: Speed Limit Data */}
                <section>
                    <h2>3. Speed Limit Data</h2>
                    <ul>
                        <li><strong>Third-Party Data:</strong> Speed limits sourced from OpenStreetMap (OSM). Data may be inaccurate.</li>
                        <li><strong>No Guarantee:</strong> We do not verify OSM data and are not liable for errors.</li>
                    </ul>
                </section>

                {/* Section 4: In-App Purchases */}
                <section>
                    <h2>4. In-App Purchases</h2>
                    <ul>
                        <li><strong>Subscriptions:</strong> Monthly Premium (auto-renewing) and Lifetime Premium (one-time).</li>
                        <li><strong>Features:</strong> Premium unlocks advertised functionality (e.g., save capacity, themes).</li>
                        <li><strong>Payment & Refunds:</strong> Manage via App Store/Google Play. Refunds through platform only.</li>
                    </ul>
                </section>

                {/* Section 5: Data Storage */}
                <section>
                    <h2>5. Data Storage</h2>
                    <p>All trip data is stored locally on your device. We cannot access or recover it.</p>
                </section>

                {/* Section 6: Disclaimers */}
                <section>
                    <h2>6. Disclaimers</h2>
                    <p>The App relies on device sensors (e.g., GPS). Accuracy depends on hardware/signal conditions. Provided "as-is."</p>
                </section>

                {/* Section 7-11: Remaining Sections */}
                {/* Add similar sections for Limitation of Liability, Termination, Governing Law, etc. */}

                {/* Footer */}
                <div className="contact">
                    <h2>Contact</h2>
                    <p>
                        Questions? Email <a href="mailto:techmate.tmi@gmail.com">techmate.tmi@gmail.com</a>.
                        Review our <a href="/speedometerpp">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </GradientBackground>
    );
}
export default SpeedometerTOS;