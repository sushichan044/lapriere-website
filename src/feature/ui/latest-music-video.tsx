import { component$ } from '@builder.io/qwik'

export const latestMusicVideoIFrameClass = `aspect-square w-screen max-w-full sm:px-4 sm:aspect-video`

export const LatestMusicVideo = component$<{
	title: string
	iframeUrl: string
}>((props) => {
	return (
		// 黒帯対策でレイヤーを一つ下げる
		<div class={[latestMusicVideoIFrameClass, 'flex items-center justify-center']}>
			<iframe
				title={props.title}
				src={props.iframeUrl}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullscreen
				class="aspect-square w-full sm:aspect-video"
			/>
		</div>
	)
})
