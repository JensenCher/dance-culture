import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import ProductReel from "@/components/products/ProductReel";
import { DANCE_CATEGORIES } from "@/config";

type Param = string | string[] | undefined;

interface ProductSearchParams {
  searchParams: { [key: string]: Param };
}

const parse = (param: Param) => {
  return typeof param === "string" ? param : undefined;
};

const ProductsPage = ({ searchParams }: ProductSearchParams) => {
  const sort = parse(searchParams.sort);
  const category = parse(searchParams.category);

  const label = DANCE_CATEGORIES.find(({ value }) => value === category)?.label;

  return (
    <MaxWidthWrapper>
      <ProductReel title={label ?? "Browse high-quality assets"} query={{ category, limit: 40, sort: sort === "desc" || sort === "asc" ? sort : undefined }} />
    </MaxWidthWrapper>
  );
};

export default ProductsPage;
