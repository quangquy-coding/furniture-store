import { Heart } from "lucide-react";

// Khai báo component bằng const
const ProductCard = ({ image, name, price, category }) => {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">
          <Heart className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{category}</p>
        <h3 className="font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-lg font-bold text-primary">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
