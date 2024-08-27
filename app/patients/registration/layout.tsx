import { RegistrationSidebar } from "@/components/reg-sidebar";
import { RegistrationProvider } from "@/context/registrationContext"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
    <RegistrationProvider>
        <div className="container h-full w-full mx-auto overflow-scroll">
            <h1 className="py-6 font-medium text-[24px] w-full text-center">Private Registration KYC</h1>
            <div className="flex flex-1 gap-[100px] overflow-auto h-[calc(100%-84px)] pr-4">
                <aside className="sticky top-0 bottom-0 flex flex-col max-w-[240px] h-min overflow-auto ">
                    <RegistrationSidebar/>
                </aside> 
                <main className="flex-1 flex flex-col min-h-max  ">
                    {children}
                    <div className="padding  w-full min-h-[200px]"/>
                </main> 

            </div> 
        </div>
    </RegistrationProvider>
    );
}