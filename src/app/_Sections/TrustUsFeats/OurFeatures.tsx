import TrustFeature from "./TrustFeature";

export default function OurFeatures() {
  return (
    <div className="grid grid-cols-1 border-y md:grid-cols-2 lg:grid-cols-4">
      <TrustFeature feature="shipping" />
      <TrustFeature feature="payment" />
      <TrustFeature feature="return" />
      <TrustFeature feature="support" />
    </div>
  );
}
