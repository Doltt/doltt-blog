import React from 'react'

import Github from 'assets/icons/Github.svg'
import BliBli from 'assets/icons/BliBli.svg'
import Jianshu from 'assets/icons/Jianshu.svg'
import {Icons } from './styles'


export const SocialIcon = () => {
	return (
			<Icons>
				<a href="https://github.com/Doltt" target="_blank" rel='noreferrer'><img src={ Github } alt='Github'/></a>
				<a href="https://space.bilibili.com/512774669?spm_id_from=333.33.b_73656375726974794f75744c696e6b.1" target="_blank" rel='noreferrer'><img src={ BliBli } alt='BliBli'/></a>
				<a href="https://www.jianshu.com/u/c033e610e0f8" target="_blank" rel='noreferrer'><img src={ Jianshu } alt='简书'/></a>
			</Icons>
    )
}