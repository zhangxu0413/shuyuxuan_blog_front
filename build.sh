###
 # @Date         : 2021-07-28 09:05:10
 # @LastEditors  : zhangxu
 # @LastEditTime : 2021-07-28 09:08:10
 # @FilePath     : /shuyuxuan_blog_front/build.sh
###
docker build -t shuyuxuan_blog_front .
docker tag shuyuxuan_blog_front:latest registry.cn-hangzhou.aliyuncs.com/zhangxu0413/shuyuyuxuan_blog_front:$1
docker push shuyuxuan_blog_front:latest registry.cn-hangzhou.aliyuncs.com/zhangxu0413/shuyuyuxuan_blog_front:$1