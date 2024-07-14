export default function ProductDetail({ params }: {
    params: { productId: string}
}) {
    console.error('params-', params);
    
  return (
    <div>Product {params.productId}</div>
  )
}
