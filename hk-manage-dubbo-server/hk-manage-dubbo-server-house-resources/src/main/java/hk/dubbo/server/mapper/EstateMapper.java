package hk.dubbo.server.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import hk.dubbo.server.pojo.Estate;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <p>
 * 楼盘表 Mapper 接口
 * </p>
 *
 * @author evan
 * @since 2021-02-19
 */
@Mapper
public interface EstateMapper extends BaseMapper<Estate> {
    // List<Estate> findAll();
    //
    // Estate findOneById(int i);
    //
    // boolean saveEstate(Estate estate);
}
