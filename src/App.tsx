import CarParkVisualization from "./CarParkVisualization";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <CarParkVisualization />
      <Analytics />
    </>
  );
}
