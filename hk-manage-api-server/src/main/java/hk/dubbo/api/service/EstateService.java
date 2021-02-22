package hk.dubbo.api.service;

import com.alibaba.dubbo.config.annotation.Reference;
import hk.dubbo.server.api.ApiEstateService;
import hk.dubbo.server.pojo.Estate;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 2021-02-21 12:36
 *
 * @author Evan Ma
 * @since
 **/
@Service
public class EstateService {

    @Reference(version = "1.0.0")
    private ApiEstateService apiEstateService;

    public int save(Estate estate) {
        return this.apiEstateService.save(estate);
    }

    public List<Estate> findAll(){
        return this.apiEstateService.findAll();
    }

    public Estate findOneById(int i) {
        return this.apiEstateService.findOneById(i);
    }

    public List<Estate> findByLikeName(String name) {
        return this.apiEstateService.findByLikeName(name);
    }
}
