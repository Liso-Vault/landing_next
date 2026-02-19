import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Spacer } from "../components/Spacer";

export default function Privacy() {
    return (
        <div className="bg-gradient min-h-screen flex flex-col">
            <Head>
                <title>Privacy Policy | Liso</title>
                <meta name="description" content="Liso Privacy Policy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <div className="flex-grow max-w-[800px] mx-auto px-5 py-10 text-gray-700 dark:text-gray-200">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Privacy Policy</h1>

                <div className="space-y-6">
                    <p>
                        We built the Liso app as a Freemium app. This SERVICE is provided by Liso at no cost and is intended for use as is.
                    </p>
                    <p>
                        This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
                    </p>
                    <p>
                        The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Liso unless otherwise defined in this Privacy Policy.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Information Collection and Use</h3>
                        <p>
                            The app does use third-party services but never any personally identifiable information.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Third Party Service Providers</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li><a href="https://firebase.google.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Firebase</a></li>
                            <li><a href="https://filebase.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Filebase</a></li>
                        </ul>
                    </div>

                    <p>
                        We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Cookies</h3>
                        <p>
                            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                        </p>
                        <p className="mt-2">
                            This Service does not use these “cookies” explicitly.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Service Providers</h3>
                        <p>We may employ third-party companies and individuals due to the following reasons:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                            <li>To facilitate our Service;</li>
                            <li>To provide the Service on our behalf;</li>
                            <li>To perform Service-related services; or</li>
                            <li>To assist us in analyzing how our Service is used.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Security</h3>
                        <p>
                            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Links to Other Sites</h3>
                        <p>
                            This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Children’s Privacy</h3>
                        <p>
                            These Services do not address anyone under the age of 13. We do not collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Changes to This Privacy Policy</h3>
                        <p>
                            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                        <p className="mt-2 font-medium">This policy is effective as of 2022-05-03</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                        <p>
                            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:dev@liso.dev" className="text-blue-500 hover:underline">dev@liso.dev</a>.
                        </p>
                    </div>
                </div>
            </div>

            <Spacer classes="h-[20px]" />
            <Footer />
        </div>
    );
}
