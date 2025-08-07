import { useEffect, useState } from "react";

function useDefferRendering() {
  const [deferred, setDeferred] = useState(true);

  useEffect(() => {
    setDeferred(false);
  }, []);

  return deferred;
}

export default useDefferRendering;
