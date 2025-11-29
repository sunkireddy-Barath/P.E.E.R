import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sidebar } from '../../components/Sidebar';
export default function AssignmentsLayout({ children, }) {
    return (_jsxs("div", { className: "flex h-screen overflow-hidden", children: [_jsx(Sidebar, {}), _jsx("main", { className: "flex-1 overflow-y-auto bg-gray-50", children: children })] }));
}
