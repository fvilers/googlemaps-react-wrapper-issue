import { useEffect, useRef, useState } from "react";

type Props = {
  options?: google.maps.MapOptions;
};

function GoogleMap({ options }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current !== null && map !== undefined) {
      setMap(new window.google.maps.Map(ref.current, options ?? {}));
    }
  }, [map, options]);

  return <div ref={ref} />;
}

export default GoogleMap;
