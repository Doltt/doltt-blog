import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import { Links, Wrapper, Brand } from './styles'
import Logo from 'assets/icons/Logo.svg'


export const Navbar = () => {
	return (
		<Wrapper as={Container}>
			<Brand as = {Link} to='/'>
				<img src={Logo} alt='Logo' />胡杨树
			</Brand>
			<Links>
				<Link to='/' activeClassName='current'> 首页 </Link>
				<Link to='/blog' activeClassName='current'> 内容 </Link>
				<Link to='/about' activeClassName='current'> 关于我 </Link>
			</Links>
		</Wrapper>
	)
}