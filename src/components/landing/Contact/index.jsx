import React from 'react'
import Poplar from 'assets/img/Poplar.jpg'
import Wechat from 'assets/img/Wechat.jpg'
import { Container, SocialIcon } from 'components/common'
import { Intro } from 'components/landing'
import { Wrapper, ContactMe, BannerImg } from './styles'

export const Contact= () => {
	return (
		<Wrapper>

			<BannerImg as={Container}><img src={Poplar} alt="about-banner" /></BannerImg>
			<Intro
				Title="关于我"
				Intro="我叫胡杨树，喜欢折腾一些有趣的东西，喜欢立一些奇奇怪怪的Flag"
				IntroSupplement="哦，对了，我还没有写留言和评论功能，有想对我说的发我邮箱吧～～"
				ButtonDisplay="false"
			/>
			<ContactMe as={Container}>
				<h1>联系我</h1>
				<p>其他站点</p>
				<SocialIcon />
				<br />
				<p>微信</p>
				<img src={ Wechat } alt="Wechat" />
			</ContactMe>
			<Intro
				Title="关于这个站点"
				Intro="建立这个站点的初衷其实也是一个Flag，想在这颗小小的蓝色星球上留下一些痕迹，后来又立了一个当阿婆主的Flag，于是想要把内容向多个平台推送，于是又加了一个服务，所以这个站点也就变成了车站起点的角色，所有内容都先到这里，然后在推送到其他平台。"
				IntroSupplement="后续可能把一些常用的链接也放上来"
				ButtonDisplay="false"
			/>
		</Wrapper>
	)
}