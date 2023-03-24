import {remarkToc} from 'remark-toc'
import {remarkCommentConfig} from 'remark-comment-config'
import {remarkGfm} from 'remark-gfm'
import {remarkGithub} from 'remark-github'
import {remarkValidateLinks} from 'remark-validate-links'

const plugins = [
  [remarkToc, {tight: true, maxDepth: 3, heading: 'contents'}],
  remarkCommentConfig,
  [remarkGfm, {tablePipeAlign: false}],
  remarkGithub,
  remarkValidateLinks
]

const preset = {plugins}

export default preset