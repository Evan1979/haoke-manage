package hk.dubbo.server;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;

// @EnableEurekaServer   // 表示它是服务注册中心
//exclude = DataSourceAutoConfiguration.class
@SpringBootApplication()
@MapperScan("hk.dubbo.server.mapper")
public class DubboProvider {

    public static void main(String[] args) {
        new SpringApplicationBuilder(DubboProvider.class)
                // 非 Web 应用
                .web(WebApplicationType.NONE)
                .run(args);
    }

}
