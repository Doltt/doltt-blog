import React from 'react'
import { Container } from 'components/common'
import Type from './Type'
import Internet from 'assets/Illustration/Internet.svg'
import Finance from 'assets/Illustration/Finance.svg'
import Logs from 'assets/Illustration/Logs.svg'
import Others from 'assets/Illustration/Others.svg'

import { Wrapper, Grid } from './styles'

export const Content = () => {
	return(
		<Wrapper>
			<Container>
				<h2>站点内容</h2>
				<Grid>
					<Type icon={Internet} title= '互联网' />
					<Type icon={Finance} title= '金融学' />
					<Type icon={Logs} title= '个人记录' />
					<Type icon={Others} title= '奇奇怪怪' />
				</Grid>
			</Container>
		</Wrapper>
	)
}