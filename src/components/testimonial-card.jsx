import { Star } from "lucide-react";

// Khai báo component bằng const
const TestimonialCard = ({ name, role, image, rating, review }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Quote Icon */}
      <div className="text-6xl text-primary mb-4 font-serif">"</div>

      {/* Review Text */}
      <p className="text-muted-foreground mb-6 leading-relaxed">{review}</p>

      {/* Customer Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
