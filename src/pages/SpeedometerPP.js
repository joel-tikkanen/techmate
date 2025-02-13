import React from 'react';
import { styled } from '@mui/system';


const GradientBackground = styled('div')({
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #1E1E1E, #121212)',
    color: 'white',
    padding: '20px',
    overflowY: 'auto',
});


function SpeedometerPP() {
    return (
        <GradientBackground>
            <div>
                <h1>Privacy Policy</h1>

                <p>
                    This Privacy Policy was last modified on Febuary 13, 2025. The apps
                    created by Techmate tmi / Joel Tikkanen. This page informs you of the policies regarding
                    the collection, use, and disclosure of Personal Information I receive from
                    users of my apps. By using My Apps, you agree to the collection and use of
                    information in accordance with this policy.
                </p>

                <h3>Information Collection and Use:</h3>

                <p>
                    My Apps do not collect any personal information beyond what is automatically collected by Google AdMob for the purpose of serving advertisements. This includes:
                </p>
                <ul>
                    <li>
                        <strong>Google AdMob Data Collection:</strong> Google AdMob may collect non-personal data such as your device type, app usage statistics, IP address, browser type, and version to deliver personalized ads and analyze ad performance. This data is managed by Google, and I do not have entire access to it.
                    </li>
                    <li>
                        <strong>Local Data Storage:</strong> All app-related data (e.g., saved trips, user preferences, settings) is stored locally on your device. I do not have access to this data and cannot recover or delete it on your behalf.
                    </li>
                    <li>
                        <strong>Location Data Collection:</strong> My Apps may access your device's location data to enable location-based features, such as speed tracking or location visualization. This data is:
                        <ul>
                            <li>Collected only when the app and its tracking are on.</li>
                            <li>Stored locally on your device and not transmitted to or accessible by me or any third party.</li>
                            <li>Used solely to enhance your app experience and is not shared with any external parties.</li>
                        </ul>
                    </li>
                </ul>
                <p>
                    For more information about how Google processes data, visit <a href="https://policies.google.com/privacy">Google Privacy & Terms</a>.
                </p>

                <h3>Cookies:</h3>
                <p>
                    My Apps do not use cookies directly. However, third-party service providers like Google AdMob may use cookies and similar technologies to collect information about your interactions with ads in the app.
                </p>

                <h3>Data Retention and Deletion:</h3>
                <p>
                    <strong>Retention:</strong> No personal data is collected or retained by me. Any data collected by Google AdMob is managed by Google and subject to their retention policies.<br />
                    <strong>Deletion:</strong> Since I do not collect or store user data, I cannot delete or recover any data. Users can manage or delete their data directly through Google account settings.
                </p>

                <h3>User Control:</h3>
                <p>
                    - To opt out of personalized ads, visit <a href="https://adssettings.google.com/">Google Ad Settings</a>.<br />
                    - To revoke location permissions, go to your device settings, select the app under "App Permissions," and turn off location access. Please note that some app features may not function correctly without location permissions.
                </p>

                <h3>Changes to This Privacy Policy:</h3>
                <p>
                    This Privacy Policy may be updated from time to time. Any changes will be posted here, and continued use of My Apps indicates your acceptance of the updated policy.
                </p>

                <h3>Contact Information:</h3>
                <p>
                    If you have questions or concerns about this Privacy Policy, please contact me at:<br />
                    <strong>Email:</strong> <a href="mailto:techmate.tmi@gmail.com">techmate.tmi@gmail.com</a>
                </p>
            </div>
        </GradientBackground>
    )
}

export default SpeedometerPP;