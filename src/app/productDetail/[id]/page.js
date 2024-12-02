import ProductDetail from "@/app/components/productdetailsclient";
import { coconutData } from "@/coconut-oil";

export async function generateStaticParams() {
    const ids = coconutData[0].coconut[0]?.variants.map((variant) => ({
        id: variant.id.toString(),
    }));

    return ids;
}

export default function Page({ params }) {
    return <ProductDetail id={params.id} />;
}