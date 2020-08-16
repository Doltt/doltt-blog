import React from 'react'
import { Layout } from 'components/common'
import { Intro } from 'components/landing'

export default () => {
	return (
		<Layout>
			<Intro
				Title="页面不存在"
				Intro="好奇你为什么会访问到这个页面的..."
				ButtonDisplay="true"
				ButtonText="返回首页"
				ButtonLink="/"
			/>
		</Layout>
	);
}
