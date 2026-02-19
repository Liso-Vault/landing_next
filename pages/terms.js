import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Spacer } from "../components/Spacer";

export default function Terms() {
    return (
        <div className="bg-gradient min-h-screen flex flex-col">
            <Head>
                <title>Terms of Use | Liso</title>
                <meta name="description" content="Liso Terms of Use" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <div className="flex-grow max-w-[800px] mx-auto px-5 py-10 text-gray-700 dark:text-gray-200">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Terms of Use</h1>

                <div className="space-y-6">
                    <p>
                        By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You shouldn’t try to translate the app into other languages or make derivative versions. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to Liso.
                    </p>
                    <p>
                        Liso is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.
                    </p>
                    <p>
                        The app does use third-party services that declare their Terms and Conditions.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Link to Terms and Conditions of third-party service providers used by the app</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li><a href="https://firebase.google.com/terms" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Firebase</a></li>
                            <li><a href="https://firebase.google.com/terms/crashlytics" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Firebase Crashlytics</a></li>
                            <li><a href="https://firebase.google.com/terms/analytics" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Firebase Analytics</a></li>
                            <li><a href="https://cloud.google.com/terms/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Google Cloud Platform</a></li>
                            <li><a href="https://developers.google.com/terms/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Google APIs</a></li>
                            <li><a href="https://filebase.com/terms-of-service" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Filebase</a></li>
                        </ul>
                    </div>

                    <p>
                        You should be aware that there are certain things that Liso will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but Liso cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.
                    </p>
                    <p>
                        If you’re using the app outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
                    </p>
                    <p>
                        Along the same lines, Liso cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Liso cannot accept responsibility.
                    </p>
                    <p>
                        With respect to Liso's responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Liso accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.
                    </p>
                    <p>
                        At some point, we may wish to update the app. The app is currently available on Android, iOS, iPadOS, MacOS, and Windows – the requirements for these systems(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. Liso does not promise that it will always update the app so that it is relevant to you and/or works with the version that you have installed. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Changes to This Terms and Conditions</h3>
                        <p>
                            We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
                        </p>
                        <p className="mt-2 font-medium">These terms and conditions are effective as of 2022-04-27</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                        <p>
                            If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at <a href="mailto:dev@liso.dev" className="text-blue-500 hover:underline">dev@liso.dev</a>.
                        </p>
                    </div>
                </div>
            </div>

            <Spacer classes="h-[20px]" />
            <Footer />
        </div>
    );
}
