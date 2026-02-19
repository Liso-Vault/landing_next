import { Star1, User } from "iconsax-react";

export const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Cybersecurity Analyst",
            content:
                "Liso has completely changed how I manage my personal data. The zero-knowledge architecture gives me peace of mind that my passwords are truly private.",
        },
        {
            name: "David Chen",
            role: "Software Engineer",
            content:
                "The best password manager I've used. The UI is clean, modern, and the dark mode is perfect for late-night coding sessions. Highly recommended!",
        },
        {
            name: "Emily Rodriguez",
            role: "Freelance Designer",
            content:
                "I love the offline mode! Being able to access my secure notes and client info without internet when I'm traveling is a lifesaver.",
        },
    ];

    return (
        <div className="max-w-[1200px] mx-auto px-5 py-20">
            <h2 className="text-4xl font-bold text-center txt-gradient-2 mb-16">
                Loved by security experts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <TestimonialCard key={i} data={t} />
                ))}
            </div>
        </div>
    );
};

const TestimonialCard = ({ data }) => {
    return (
        <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star1 key={i} size="20" color="#fbbf24" variant="Bold" />
                ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{data.content}"
            </p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#02f297] to-[#007a8d] flex items-center justify-center text-white font-bold">
                    {data.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                        {data.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {data.role}
                    </p>
                </div>
            </div>
        </div>
    );
};
