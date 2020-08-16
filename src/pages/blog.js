import React from 'react'
import { Layout } from 'components/common'
import { Intro, PostsList } from 'components/landing'

export default ({ data }) => {
	return (
		<Layout>
			<Intro
					Title="杂七杂八的内容"
					Intro="产出比较慢，所以还没做分类定位和查找的功能，有空补上{Flag + 1...}"
					ButtonDisplay="false"
				/>
			<PostsList />
		</Layout>
	)
}