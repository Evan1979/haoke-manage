package hk.dubbo.server.mapper;

import hk.dubbo.server.pojo.HouseResources;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.context.annotation.Primary;

import java.util.List;

@Mapper
@Primary
public interface HouseResourcesMapper extends BaseMapper<HouseResources> {

    @Select("select * from tb_house_resources")
    public List<HouseResources> findAll();

}
