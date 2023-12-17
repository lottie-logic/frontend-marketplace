import { getProductByHandle, getProductsByStoreId } from "@lib/data"
import ProductTemplate from "@modules/products/templates"
import SkeletonProductPage from "@modules/skeletons/templates/skeleton-product-page"
import StoreFrontTemplate from "@modules/store/components/storefront/template"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: { store_id: string }
}

export default async function ProductPage({ params }: Props) {
  const { products } = await getProductsByStoreId(params.store_id).catch(
    (err) => {
      console.log("err", err)
      notFound()
    }
  )

  return <StoreFrontTemplate storeId={params.store_id} />
}
