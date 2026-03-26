import { Navigation } from "@/components/Navigation";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductProblems } from "@/components/product/ProductProblems";
import { ProductSolution } from "@/components/product/ProductSolution";
import { ProductUseCases } from "@/components/product/ProductUseCases";
import { ProductHowItWorks } from "@/components/product/ProductHowItWorks";
import { ProductVisual } from "@/components/product/ProductVisual";
import { ProductEnvironments } from "@/components/product/ProductEnvironments";
import { ProductCTA } from "@/components/product/ProductCTA";
import { Footer } from "@/components/Footer";

const ProductPage = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductHero />
      <ProductProblems />
      <ProductSolution />
      <ProductUseCases />
      <ProductHowItWorks />
      <ProductVisual />
      <ProductEnvironments />
      <ProductCTA />
      <Footer />
    </main>
  );
};

export default ProductPage;
