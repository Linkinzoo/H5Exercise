# 启动程序
pm2 start ./bin/www

# 休眠2秒，等待进程启动：
sleep 2

# 设置允许进程占用的CPU使用率
maxCpuRate=98

while [ 1 ]
do
    # 获取pid:
    thePid=$(pm2 list|grep www | awk '{print $8}')

    # 检测pid是否获取成功：
    if [ ! $thePid ]
    then
        echo "进程未找到，程序将在2秒后重新获取进程PID"
        sleep 2
    else
#       出现BUG的获取方式：
#       theCpuRate=$(ps aux|grep www|grep $thePid|awk '{print $3}'|cut -f 1 -d".")

        # 获取进程的CPU使用率：
        theCpuRate=$(ps -p $thePid -o pcpu | grep -v CPU | cut -d . -f 1|awk '{print $1}')
        echo "进程$thePid 的CPU使用率为$theCpuRate%"

        # 判断进程的CPU使用率是否大于规定的上限：
        if [ $theCpuRate -ge $maxCpuRate ]
        then
            echo "CPU使用率大于$maxCpuRate%,nodeJS服务即将重启"
            # 重启程序
            pm2 restart www
            sleep 3
        else
            echo "Pid:$thePid 运行正常，1s后重新检测"
            sleep 1
        fi
    fi

done
