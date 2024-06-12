import { useEffect } from "react";

export default function AlertLabel({ label }) {
  useEffect(() => {
    alert(label);
  }, [label]);

  return null; // This component does not render anything to the UI
}
