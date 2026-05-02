import { Suspense } from "react";
import InstrumentsData from "./InstrumentsData";

async function Instruments() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <InstrumentsData />
      </Suspense>
    </main>
  );
}

export default Instruments;
