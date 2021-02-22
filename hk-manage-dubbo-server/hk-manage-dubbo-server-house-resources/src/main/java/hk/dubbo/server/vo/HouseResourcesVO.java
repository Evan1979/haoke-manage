package hk.dubbo.server.vo;

import com.baomidou.mybatisplus.annotation.TableField;
import hk.dubbo.server.pojo.Estate;
import hk.dubbo.server.pojo.HouseResources;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * <p>
 * 房源表
 * </p>
 *
 * @author itcast
 */

public class HouseResourcesVO extends HouseResources implements Serializable {

    private static final long serialVersionUID = 779152022777511345L;

    @TableField(exist = false)
    private Estate estate;

}
