package hk.dubbo.server.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import hk.dubbo.server.mapper.EstateMapper;
import hk.dubbo.server.pojo.Estate;
import hk.dubbo.server.service.IEstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 楼盘表 服务实现类
 * </p>
 *
 * @author evan
 * @since 2021-02-19
 */
@Service
public class EstateServiceImpl extends BaseServiceImpl implements IEstateService {

    @Autowired
    EstateMapper estateMapper;

    @Override
    public List<Estate> findAll() {
        return estateMapper.selectList(null);
    }

    @Override
    public Estate findOneById(int id) {
        return estateMapper.selectById(id);
    }

    @Override
    public int save(Estate estate) {
        return estateMapper.insert(estate);
    }

    @Override
    public List<Estate> findByWrapper(QueryWrapper<Estate> queryWrapper) {
        return estateMapper.selectList(queryWrapper);
    }

    @Override
    public List<Estate> findByLikeName(String name) {
        QueryWrapper<Estate> wrapper = new QueryWrapper<>();
        wrapper.like("name",name);
        return estateMapper.selectList(wrapper);
    }
}
