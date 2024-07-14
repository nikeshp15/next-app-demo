export default function DocsComponent({ params }: {
    params: {
        slug: string[]
    }
}) {
    console.log(params)
  return (
    <div>docs component</div>
  )
}
