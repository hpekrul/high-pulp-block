import {createRoot} from "react-dom/client"
import BlockApp from "./components/BlockApp";

// createRoot(document.getElementById('....')).render(BlockApp);
const blocks = document.querySelectorAll('.wp-block-hp-staff-finder');
blocks.forEach(block => {
	createRoot(block).render(<BlockApp />);
})
