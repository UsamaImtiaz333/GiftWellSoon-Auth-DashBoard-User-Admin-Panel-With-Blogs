import friendimage from '../assets/group.jpg'
export default function WhyGWS() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={friendimage}
          alt="Support group"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Why GWS?</h2>
          <p className="text-gray-700 mb-6">
            GiftWellSoon makes it easy for caregivers to request the right
            support for their loved ones...
          </p>
          <ul className="space-y-3">
            <li>✔ Challenge of support coordination</li>
            <li>✔ Ease for caregivers</li>
            <li>✔ Platform Solution</li>
            <li>✔ Impact of the right support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
