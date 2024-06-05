import type { HTMLAttributes } from '@builder.io/qwik'
import { component$, Slot } from '@builder.io/qwik'

export const ExternalLink = component$<
	Omit<HTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'> & { href: string }
>((props) => {
	return (
		<a {...props} target="_blank" rel="noreferrer">
			<Slot />
		</a>
	)
})
