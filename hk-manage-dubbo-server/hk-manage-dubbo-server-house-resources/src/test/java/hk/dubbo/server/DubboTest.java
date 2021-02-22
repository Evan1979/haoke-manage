package hk.dubbo.server;

import com.alibaba.dubbo.config.annotation.Reference;
import hk.dubbo.server.api.ApiHouseResourcesService;
import hk.dubbo.server.pojo.HouseResources;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * 2021-02-18 19:05
 *
 * @author Evan Ma
 * @since
 **/
@RunWith(SpringRunner.class)
@SpringBootTest
public class DubboTest {

    @Reference(version = "1.0.0")
    private ApiHouseResourcesService apiHouseResourcesService;


    @Test
    public void findAll(){

        List<HouseResources> all = apiHouseResourcesService.findAll();
        System.out.println(all);

    }

}
