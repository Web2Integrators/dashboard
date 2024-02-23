
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city'
import { Image } from '@unpic/qwik';
export default component$(() => {
  return (
    <Link class="inline-flex" href="/" aria-label="Cruip">
      <Image
      src="/logo.svg"
      layout="constrained"
      width={200}
      height={50}
      alt="A lovely bath"
    />
    </Link>
  )
})