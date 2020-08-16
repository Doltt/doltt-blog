import React from 'react'
import { Layout } from 'components/common'
import { Intro, Content, Recently } from 'components/landing'

export default () => {
	return (
		<Layout>
			<Intro
				Title="我叫胡杨树"
				Intro="很高兴你能访问到这里，这个站点归集了一些奇奇怪怪的内容，当然这些内容我也基本同步发布在了其他平台"
				IntroSupplement="最近，我立了一个阿婆主的Flag，期望不要倒～～～"
				ButtonDisplay="true"
				ButtonText="更多介绍"
				ButtonLink="/about"
			/>
			<Content />
			<Recently />
		</Layout>
	);
}
