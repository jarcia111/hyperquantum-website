import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { SecurityUtils } from "./utils/security";

// Inicializar medidas de seguridad
SecurityUtils.initSecurity();

createRoot(document.getElementById("root")!).render(<App />);
