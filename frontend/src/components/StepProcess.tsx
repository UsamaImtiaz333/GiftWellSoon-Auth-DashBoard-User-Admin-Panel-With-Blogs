import giftimge from '../assets/gift.jpg'
import smsimage from '../assets/heartsms.jpg'
import noteimage from '../assets/notebook.jpg'

type Step = {
  title: string;
  description: string;
  image: string; 
};

const steps: Step[] = [
  {
    title: "Create Your GiftWell",
    description: "Sign up and add the items, services, or financial support you need most.",
    image: giftimge,
  },
  {
    title: "Share with Loved Ones",
    description: "Send your personal link to family and friends so they can support you.",
    image: smsimage,
  },
  {
    title: "Receive Meaningful Support",
    description: "Get meals, wellness products, services, and help when and how you need it.",
    image: noteimage,
  },
];

export default function StepProcess() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Step Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Circle with image */}
              <div className="w-14 h-14 mx-auto rounded-full mb-4 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <a href="#" className="text-blue-500 hover:underline">
                Start Your GiftWell Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
