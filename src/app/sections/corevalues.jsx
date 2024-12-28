import { Lightbulb, Shield, CheckCircle, DollarSign, Ruler, Target } from 'lucide-react';

const coreValues = [
  {
    title: 'Lead with Innovation',
    description:
      'We prioritize innovative strategies, creative solutions, and unconventional methods that set us apart from the competition.',
    icon: Lightbulb,
  },
  {
    title: 'Ensure Reliability',
    description:
      'Reliability is our commitment. With a proven history of timely delivery, we’re your trusted partner for consistent performance.',
    icon: Shield,
  },
  {
    title: 'Committed to Discipline',
    description:
      'We emphasize our commitment to meticulous and methodical preconstruction estimating for accuracy and reliability.',
    icon: CheckCircle,
  },
  {
    title: 'Offer Cost-Effective Solutions',
    description:
      'We focus on affordability while upholding top-notch quality. Our experts thoroughly review your project to find cost-saving opportunities.',
    icon: DollarSign,
  },
  {
    title: 'Ensure Precision',
    description:
      'We provide accurate and detailed preconstruction estimates, ensuring reliability and precision in every project.',
    icon: Ruler,
  },
  {
    title: 'Ensure Accountability',
    description:
      'We maintain the highest standards of integrity and transparency in preconstruction estimating for accurate and reliable projections.',
    icon: Target,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg flex items-start space-x-4">
              <value.icon className="w-12 text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                <p className="text-gray-600 mt-2">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
