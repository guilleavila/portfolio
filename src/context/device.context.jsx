import { createContext } from "react";

const DeviceContext = createContext()

const DeviceProviderWrapper = ({ children }) => {
    return (
        <DeviceContext.Provider>
            {children}
        </DeviceContext.Provider>
    )
}

export { DeviceContext, DeviceProviderWrapper }